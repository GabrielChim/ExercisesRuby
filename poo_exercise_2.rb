class Contact 
  def self.all
    [ 
      { 
        edad: 20, 
        nombre: "Jose", 
        apellido: "Lopez", 
        sexo: :masculino
      },
      { 
        edad: 21, 
        nombre: "Oscar", 
        apellido: "Perez", 
        sexo: :masculino
      },
      { 
        edad: 22, 
        nombre: "Martha", 
        apellido: "Sanchez", 
        sexo: :femenino
      }
    ]
  end
  
  def self.find_by(attr, value)
    all.each do |contact| 
      return contact if contact[attr] == value
    end
    {}
  end
end
  
  Contact.find_by(:edad, 21)