data = {
  enterprise: 'Homie',
  years: 4
}

def update_info(data, key, value)
  if data.has_key?(key)
    data[key] = value
  else
    data[key] = value
  end
  data
end

update_info(data, :enterprise2, 123)