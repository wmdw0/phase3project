class Adddesc < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :description, :string
  end
end
