class MakeChanges < ActiveRecord::Migration[5.2]
  def change
    change_column_null :cats, :description, true
    change_column_null :cats, :birth_date, true

  end
end
