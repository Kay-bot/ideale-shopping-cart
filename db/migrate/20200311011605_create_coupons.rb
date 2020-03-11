class CreateCoupons < ActiveRecord::Migration[6.0]
  def change
    create_table :coupons do |t|
      t.string :code
      t.string :status
      t.datetime :issue_date
      t.datetime :expiry_date

      t.timestamps
    end
  end
end
