defmodule PdscServer.Repo.Migrations.CreateBcv do
  use Ecto.Migration

  def change do
    create table(:bcv) do
      add :fecha, :string
      add :euro, :string
      add :yuan, :string
      add :lira, :string
      add :rublo, :string
      add :dolar, :string

      timestamps()
    end

  end
end
