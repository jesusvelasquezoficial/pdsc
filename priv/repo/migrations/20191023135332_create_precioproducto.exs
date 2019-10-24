defmodule PdscServer.Repo.Migrations.CreatePrecioproducto do
  use Ecto.Migration

  def change do
    create table(:precioproducto) do
      add :idproducto, :integer
      add :fecha, :string
      add :precio, :integer

      timestamps()
    end

  end
end
