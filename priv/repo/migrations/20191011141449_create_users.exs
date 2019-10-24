defmodule PdscServer.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :ape, :string
      add :email, :string
      add :password_hash, :string
      add :tyc, :boolean, default: true, null: true

      timestamps()
    end

    create unique_index(:users, [:email])
  end
end
