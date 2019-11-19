class Car
  attr_accessor :brand, :color, :year, :start_car, :start_trip
  
  def start_car
    @start_car = true
    "El auto se ha encendido"
  end
  
  def start_trip
    return raise StandardError.new("El auto no ha sido arrancado") unless @start_car
    @start_trip = true
    return "El viaje ha iniciado" 
  end
    
  def finish_trip
    return raise StandardError.new("El viaje no ha iniciado") unless @start_trip
    "El viaje ha finalizado"
  end
end
  
auto = Car.new
auto.start_car
auto.start_trip
auto.finish_trip