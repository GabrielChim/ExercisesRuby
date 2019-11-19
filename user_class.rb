class User
  attr_accessor :name, :last_name

  def full_name
    "#{@name} #{@last_name}"
  end
end

user = User.new
user.name =  "Gabriel"
user.last_name = "Chim"
user.full_name