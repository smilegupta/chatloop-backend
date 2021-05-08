/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const uuid = require("uuid");

const {
  putItem
} = require("./db-helpers");

const userConversationsTable = "UserConversations-ln7ixgizerarpdu3x6rn5jtboy-dev";
const messagesTable = "Messages-ln7ixgizerarpdu3x6rn5jtboy-dev";

const saveMessage = ({
                       conversationId,
                       sentAt,
                       message,
                       authorId,
                       authorName,
                       messageId
                     }) =>
  putItem({
    TableName: messagesTable,
    Item: {
      conversationId,
      sentAt,
      messageId,
      message,
      authorId,
      authorName
    }
  });

const updateUserConversations = ({
                                   conversationId,
                                   sentAt,
                                   message,
                                   authorId,
                                   authorName,
                                   conversationImage,
                                   conversationType,
                                   messageId,
                                   conversationName,
                                   description
                                 }) => {
  conversationName = conversationType !== "chatRoom" ? authorName : conversationName;
  return putItem({
    TableName: userConversationsTable,
    Item: {
      userId: authorId,
      lastMessageAt: sentAt,
      conversationType,
      conversationName,
      conversationImage,
      conversationId,
      lastMessage: message,
      lastMessageId: messageId,
      description
    }
  });
}

/*
    Function to store the sent message details in the Messages table as well as in the
    UserConversations table
 */
exports.handler = async (event) => {
  console.log("Input to the lambda function", event);
  const {
    conversationId,
    sentAt,
    message,
    authorId,
    authorName,
    conversationImage,
    conversationType,
    conversationName,
    description
  } = event.arguments;
  const messageId = uuid.v4();
  const promises = [
    saveMessage({
      conversationId,
      sentAt,
      message,
      authorId,
      authorName,
      messageId
    }),
    updateUserConversations({
      conversationId,
      sentAt,
      message,
      authorId,
      authorName,
      conversationImage,
      conversationType,
      messageId,
      conversationName,
      description
    })];

  return Promise.all(promises)
    .then(response => {
      console.log(response);
      return {
        conversationId,
        sentAt,
        messageId,
        message,
        authorId,
        authorName,
        conversationName,
        description
      }
    })
    .catch(err => {
      console.log(err);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify('Internal Server Error')
      }
    })
};
