defmodule PdscServer.Repo.Migrations.CreateGold do
  use Ecto.Migration

  def change do
    create table(:gold) do
      add :fecha, :string
      add :dolar, :string

      timestamps()
    end

  end
end
