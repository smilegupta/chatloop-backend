/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToNewMessage = /* GraphQL */ `
  subscription SubscribeToNewMessage($conversationId: ID!) {
    subscribeToNewMessage(conversationId: $conversationId) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateChatRooms = /* GraphQL */ `
  subscription OnCreateChatRooms {
    onCreateChatRooms {
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
export const onUpdateChatRooms = /* GraphQL */ `
  subscription OnUpdateChatRooms {
    onUpdateChatRooms {
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
export const onDeleteChatRooms = /* GraphQL */ `
  subscription OnDeleteChatRooms {
    onDeleteChatRooms {
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
export const onCreateUserConversations = /* GraphQL */ `
  subscription OnCreateUserConversations {
    onCreateUserConversations {
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
export const onUpdateUserConversations = /* GraphQL */ `
  subscription OnUpdateUserConversations {
    onUpdateUserConversations {
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
export const onDeleteUserConversations = /* GraphQL */ `
  subscription OnDeleteUserConversations {
    onDeleteUserConversations {
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
export const onCreateMessages = /* GraphQL */ `
  subscription OnCreateMessages {
    onCreateMessages {
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
export const onUpdateMessages = /* GraphQL */ `
  subscription OnUpdateMessages {
    onUpdateMessages {
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
export const onDeleteMessages = /* GraphQL */ `
  subscription OnDeleteMessages {
    onDeleteMessages {
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
