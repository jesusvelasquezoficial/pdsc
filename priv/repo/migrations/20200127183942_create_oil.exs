defmodule PdscServer.Repo.Migrations.CreateOil do
  use Ecto.Migration

  def change do
    create table(:oil) do
      add :fecha, :string
      add :dolar, :string

      timestamps()
    end

  end
end
