class CreateAnswer < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :content
      t.boolean :correct
    end
  end
end
