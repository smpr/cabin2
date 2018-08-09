class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.string :technician
      t.string :dateVisit
      t.string :fixedProblem
      t.string :notes
      t.references :issue, foreign_key: true

      t.timestamps
    end
  end
end
