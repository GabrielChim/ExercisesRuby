def ref_object_touch(record)
  return true if Setting.get('import_mode')

  member_ids = []
  organization_id_changed = record.saved_changes['organization_id']
  member_ids = list_member_ids(organization_id_changed)
  member_ids += record_members_id(record)

  member_ids.uniq.each do |user_id|
    next if user_id.eql?(record.id)
    User.find(user_id).touch
  end

  true
end

def list_member_ids(organization_id_changed)
  return if organization_id_changed && organization_id_changed[0] == organization_id_changed[1]
  return unless organization_id_changed[0]
  return if User.where(organization_id: organization_id_changed[0]).count >= 100

  organization = Organization.find(organization_id_changed[0])
  organization.touch
  organization.member_ids
end

def record_members_id(record)
  return unless record.organization
  return if User.where(organization_id: record.organization_id).count >= 100

  record.organization.touch
  record.organization.member_ids
end