defmodule PdscServer.Almacen.Producto do
  use Ecto.Schema
  import Ecto.Changeset

  schema "productos" do
    field :descripcion, :string
    field :distribuidor, :string
    field :marca, :string
    field :nombre, :string
    field :presentacion, :string

    timestamps()
  end

  @doc false
  def changeset(producto, attrs) do
    producto
    |> cast(attrs, [:nombre, :marca, :distribuidor, :presentacion, :descripcion])
    |> validate_required([:nombre, :marca, :distribuidor, :presentacion, :descripcion])
  end
end
