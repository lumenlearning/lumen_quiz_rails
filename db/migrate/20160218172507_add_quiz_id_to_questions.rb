class AddQuizIdToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :quiz_id, :integer
    add_column :answers, :question_id, :integer
  end
end
