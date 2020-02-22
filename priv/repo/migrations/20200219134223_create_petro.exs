defmodule PdscServer.Repo.Migrations.CreatePetro do
  use Ecto.Migration

  def change do
    create table(:petro) do
      add :fecha, :string
      add :bolivares, :string

      timestamps()
    end

  end
end
