/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($userId: ID!, $name: String!) {
    getUsers(userId: $userId, name: $name) {
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
export const listUserss = /* GraphQL */ `
  query ListUserss(
    $userId: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserss(
      userId: $userId
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        name
        profileImage
        theme
        wallpaper
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRooms = /* GraphQL */ `
  query GetChatRooms($chatRoomId: ID!, $name: String!) {
    getChatRooms(chatRoomId: $chatRoomId, name: $name) {
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
export const listChatRoomss = /* GraphQL */ `
  query ListChatRoomss(
    $chatRoomId: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelChatRoomsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChatRoomss(
      chatRoomId: $chatRoomId
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserConversations = /* GraphQL */ `
  query GetUserConversations($userId: ID!, $conversationName: String!) {
    getUserConversations(userId: $userId, conversationName: $conversationName) {
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
export const listUserConversationss = /* GraphQL */ `
  query ListUserConversationss(
    $userId: ID
    $conversationName: ModelStringKeyConditionInput
    $filter: ModelUserConversationsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserConversationss(
      userId: $userId
      conversationName: $conversationName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMessages = /* GraphQL */ `
  query GetMessages($conversationId: ID!, $sentAt: AWSDateTime!) {
    getMessages(conversationId: $conversationId, sentAt: $sentAt) {
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
export const listMessagess = /* GraphQL */ `
  query ListMessagess(
    $conversationId: ID
    $sentAt: ModelStringKeyConditionInput
    $filter: ModelMessagesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessagess(
      conversationId: $conversationId
      sentAt: $sentAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
