defmodule PdscServer.Repo.Migrations.CreateProductos do
  use Ecto.Migration

  def change do
    create table(:productos) do
      add :nombre, :string
      add :marca, :string
      add :distribuidor, :string
      add :presentacion, :string
      add :descripcion, :string

      timestamps()
    end

  end
end
