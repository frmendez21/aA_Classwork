json.extract! @party, :name, :location, :presence

json.guests do
  json.array! @party.guests
end