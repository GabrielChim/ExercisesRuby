class Dictionary
  private
    def self.words
      {
        department: "departamento", 
        tenant: "inquilino", 
        owner: "propietario" , 
        rent: "renta"
      }
    end

  def self.translate(languaje, word)
    case languaje.downcase
      when "english"
        return "No encontrado" unless words.value?(word.downcase)
        words.key(word.downcase).to_s
      when "spanish"
        return "No encontrado" unless words.has_key?(word.to_sym.downcase)
        words[word.to_sym.downcase]
      else
        "lenguaje no detectado. solo existe Ingles y Español"
    end
  end
end 

Dictionary.translate("English", "departamento")