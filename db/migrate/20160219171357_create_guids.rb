class CreateGuids < ActiveRecord::Migration
  def change
    create_table :guids do |t|
      t.string :guid
      t.integer :order
      t.string :parent_guid
      t.string :root_guid
      t.string :short_title
      t.string :title
      t.integer :question_id
    end
  end
end
