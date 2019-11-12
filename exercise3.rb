require 'date'

def date_list(start_date, final_date, day)
  month = final_date.mon
  month_numbers = start_date.mon
  new_dates = []

  while (month_numbers <= month)
    new_dates.push(Date.new(2019, month_numbers, day).strftime('%d %b %Y'))
    month_numbers += 1
  end
  
  new_dates
end

start_date = Date.new(2019, 9, 1)
final_date = Date.new(2019, 10, 1)
day = 8
date_list(start_date, final_date, day)