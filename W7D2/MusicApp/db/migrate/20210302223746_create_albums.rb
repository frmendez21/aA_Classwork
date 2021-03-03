class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null:false, index:true
      t.string :year, null:false 
      t.integer :band_id, null:false, index:true
      t.boolean :live, default:false 
      t.timestamps
    end
  end
end
