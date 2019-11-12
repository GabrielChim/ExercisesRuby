require 'date'

start_date = Date.new(2019,1,1)
final_date = Date.new(2019,9,1)

def date_list(start_date, final_date, day)
  month = final_date.mon
  new_dates = []
  i=1
  while (i <= month)
    new_dates.push(Date.new(2019,i,day).to_s)
    i+=1
  end
  new_dates
end

date_list(start_date, final_date, 8)