defmodule PdscServer.Repo.Migrations.CreateDm do
  use Ecto.Migration

  def change do
    create table(:dm) do
      add :fecha, :string
      add :dolar, :string

      timestamps()
    end

  end
end
