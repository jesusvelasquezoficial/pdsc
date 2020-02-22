defmodule PdscServer.Repo.Migrations.CreateBitcoin do
  use Ecto.Migration

  def change do
    create table(:bitcoin) do
      add :fecha, :string
      add :dolar, :string

      timestamps()
    end

  end
end
