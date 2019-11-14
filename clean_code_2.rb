def longname
  name = fullname
  return unless organization_id
  return unless Organization.lookup(id: organization_id)
  name += "(#{organization.name})"
end