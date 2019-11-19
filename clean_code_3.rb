
def assets(data)
  app_model = self.class.to_app_model
  data[app_model] = {} unless data[app_model]

  unless data[app_model][id]
    data[app_model][id] = local_attributes
    ApplicationModel.assets_of_object_list([local_attributes], data)
  end

  return data unless self['created_by_id']

  app_model_user = User.to_app_model
  data = data_user_assest(data, data[app_model_user], %w[created_by_id])
  data
end

def local_attributes
  local_attributes = attributes_with_association_ids
  local_attributes['object'] = ObjectLookup.by_id(local_attributes['activity_stream_object_id'])
  local_attributes['type']   = TypeLookup.by_id(local_attributes['activity_stream_type_id'])
  local_attributes
end

def data_user_assest(data, data_model_user, created_by_id)
  created_by_id.each do |local_user_id|
    next unless self[local_user_id]
    next if data_model_user && data_model_user[self[local_user_id]]

    user = User.lookup(id: self[local_user_id])
    next unless user

    data = user.assets(data)
  end
  data
end