#https://gist.github.com/GabrielChim/7379f09a06acadb358d771e8ff551b76
def update
  return redirect_to welcome_index_path if checkIfSessionNotExist

  @UserActual = User.find_by_id session[:current_user_id]
  if @UserActual.type_of_user != "ENTERPRISE"
    output = {'error' => 'type_of_user'}.to_json
    render json: output
    return
  end

  one_client = Client.find_by_id(params['data'])
  case params['sameEnterprise']
  when true
    client_same_enterprise(one_client, params)
  else
    client_other_enterprise(one_client, params)
  end
end

def client_same_enterprise(one_client, params)
  one_client_user = one_client.user
  one_client_user.names = params['names']
  one_client_user.surnames = params['surnames']
  one_client.phone = params['phone']

  return technical(one_client, params) unless one_client.save || one_client_user.save
  generateLog("ACTUALIZAR_CLIENTE", nil)
  render json: "true"
  return
end

def client_other_enterprise(one_client, params)
  user_data = {
    username: params['enterprise'],
    enterprise_id: @UserActual.enterprise.id, 
    type_of_user: "CLIENTE"
  }

  return update_client_other_enterprise(one_client, params) unless User.exists?(user_data)
  output = {'error' => 'username'}.to_json
  render json: output
  return
end

def update_client_other_enterprise(one_client, params)
  one_client_user = one_client.user
  one_client_user.username = params['enterprise']
  one_client_user.names = params['names']
  one_client_user.surnames = params['surnames']
  one_client.phone = params['phone']

  return technical(one_client, params) unless one_client.save || one_client_user.save
  generateLog("ACTUALIZAR_CLIENTE", nil)
  render json: "true"
  return
end

def technical(one_client, params)
  one_client.username = "#{params["names"]} #{params["surnames"]}"
  user_data = {
    username: one_client.username, 
    enterprise_id: @UserActual.enterprise.id, 
    type_of_user: "TECNICO"
  }

  return technical_update(one_client, params) unless User.exists?(user_data)
  output = {'error' => 'username'}.to_json
  render json: output
  return
end

def technical_update(one_client, params)
  one_client.names = params['names']
  one_client.surnames = params['surnames']

  return unless one_client.save
  generateLog("ACTUALIZAR_TECNICO",nil)
  render json: "true"
  return
end