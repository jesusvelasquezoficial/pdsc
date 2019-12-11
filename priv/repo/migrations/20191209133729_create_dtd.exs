defmodule PdscServer.Repo.Migrations.CreateDtd do
  use Ecto.Migration

  def change do
    create table(:dtd) do
      add :fecha, :string
      add :euro, :string
      add :dolar, :string

      timestamps()
    end

  end
end
