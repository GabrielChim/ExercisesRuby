def customer_state(session_id = nil)
  return { state: 'chat_disabled' } if !Setting.get('chat')   

  return get_reconnect_data(session_id) if session

  return { state: 'offline' } if Chat.active_agent_count([id]).zero?

  waiting_count = Chat.waiting_chat_count(id)
  return { state: 'no_seats_available', queue: waiting_count } if  waiting_count >= max_queue

  { state: 'online' }
end

def get_reconnect_data (session_id)
  chat_session = Chat::Session.find_by(session_id: session_id, state: %w[waiting running])
  return unless chat_session
  get_chat_session(chat_session, session_id)
end

def get_chat_session(chat_session, session_id)
  if chat_session.state.eql?('running')
    data_state_running(chat_session.user_id, session_id)
  elsif chat_session.state.eql('waiting')
    data_state_waiting()
  end
end

def data_state_running(chat_user_id, session_id)
  user = nil
  return unless chat_user_id
  user = get_data_user(chat_user_id)
  session = Chat::Session.messages_by_session_id(session_id)
  return unless session
  get_data_state(session, user)
end

def get_data_user(chat_user_id)
  chat_user = User.lookup(id: chat_user_id)
  url = nil
  url = get_url_image(chat_user)
  { name: chat_user.fullname, avatar: url }
end

def get_url_image(chat_user)
  return unless chat_user.image && chat_user.image != 'none'
  "#{Setting.get('http_type')}://#{Setting.get('fqdn')}/api/v1/users/image/#{chat_user.image}"
end

def get_data_state(session, user)
  {
    state:   'reconnect',
    session: session,
    agent:   user
  }
end

def data_state_waiting()
  { state: 'reconnect', position: chat_session.position }
end
