class Tasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :body
      t.string :username
      t.timestamps
    end
  end
end
