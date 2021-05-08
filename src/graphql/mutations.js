/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const sendMessage = /* GraphQL */ `
  mutation SendMessage(
    $conversationId: ID!
    $sentAt: AWSDateTime!
    $message: String
    $authorId: ID!
    $authorName: String!
    $conversationImage: String!
    $conversationType: ConversationType!
    $conversationName: String
    $description: String
  ) {
    sendMessage(
      conversationId: $conversationId
      sentAt: $sentAt
      message: $message
      authorId: $authorId
      authorName: $authorName
      conversationImage: $conversationImage
      conversationType: $conversationType
      conversationName: $conversationName
      description: $description
    ) {
      conversationId
      sentAt
      messageId
      message
      authorId
      authorName
      refMessageId
      refMessage
      conversationName
      createdAt
      updatedAt
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      userId
      name
      profileImage
      theme
      wallpaper
      conversations {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      userId
      name
      profileImage
      theme
      wallpaper
      conversations {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      userId
      name
      profileImage
      theme
      wallpaper
      conversations {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRooms = /* GraphQL */ `
  mutation CreateChatRooms(
    $input: CreateChatRoomsInput!
    $condition: ModelChatRoomsConditionInput
  ) {
    createChatRooms(input: $input, condition: $condition) {
      chatRoomId
      name
      description
      usersCount
      theme
      createdBy
      chatRoomImage
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRooms = /* GraphQL */ `
  mutation UpdateChatRooms(
    $input: UpdateChatRoomsInput!
    $condition: ModelChatRoomsConditionInput
  ) {
    updateChatRooms(input: $input, condition: $condition) {
      chatRoomId
      name
      description
      usersCount
      theme
      createdBy
      chatRoomImage
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRooms = /* GraphQL */ `
  mutation DeleteChatRooms(
    $input: DeleteChatRoomsInput!
    $condition: ModelChatRoomsConditionInput
  ) {
    deleteChatRooms(input: $input, condition: $condition) {
      chatRoomId
      name
      description
      usersCount
      theme
      createdBy
      chatRoomImage
      createdAt
      updatedAt
    }
  }
`;
export const createUserConversations = /* GraphQL */ `
  mutation CreateUserConversations(
    $input: CreateUserConversationsInput!
    $condition: ModelUserConversationsConditionInput
  ) {
    createUserConversations(input: $input, condition: $condition) {
      userId
      lastMessageAt
      conversationType
      conversationName
      conversationImage
      conversationId
      lastMessage
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateUserConversations = /* GraphQL */ `
  mutation UpdateUserConversations(
    $input: UpdateUserConversationsInput!
    $condition: ModelUserConversationsConditionInput
  ) {
    updateUserConversations(input: $input, condition: $condition) {
      userId
      lastMessageAt
      conversationType
      conversationName
      conversationImage
      conversationId
      lastMessage
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserConversations = /* GraphQL */ `
  mutation DeleteUserConversations(
    $input: DeleteUserConversationsInput!
    $condition: ModelUserConversationsConditionInput
  ) {
    deleteUserConversations(input: $input, condition: $condition) {
      userId
      lastMessageAt
      conversationType
      conversationName
      conversationImage
      conversationId
      lastMessage
      description
      createdAt
      updatedAt
    }
  }
`;
export const createMessages = /* GraphQL */ `
  mutation CreateMessages(
    $input: CreateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    createMessages(input: $input, condition: $condition) {
      conversationId
      sentAt
      messageId
      message
      authorId
      authorName
      refMessageId
      refMessage
      conversationName
      createdAt
      updatedAt
    }
  }
`;
export const updateMessages = /* GraphQL */ `
  mutation UpdateMessages(
    $input: UpdateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    updateMessages(input: $input, condition: $condition) {
      conversationId
      sentAt
      messageId
      message
      authorId
      authorName
      refMessageId
      refMessage
      conversationName
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessages = /* GraphQL */ `
  mutation DeleteMessages(
    $input: DeleteMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    deleteMessages(input: $input, condition: $condition) {
      conversationId
      sentAt
      messageId
      message
      authorId
      authorName
      refMessageId
      refMessage
      conversationName
      createdAt
      updatedAt
    }
  }
`;
