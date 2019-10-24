defmodule PdscServer.Seguimiento.PrecioProducto do
  use Ecto.Schema
  import Ecto.Changeset

  schema "precioproducto" do
    field :fecha, :string
    field :idproducto, :integer
    field :precio, :integer

    timestamps()
  end

  @doc false
  def changeset(precio_producto, attrs) do
    precio_producto
    |> cast(attrs, [:idproducto, :fecha, :precio])
    |> validate_required([:idproducto, :fecha, :precio])
  end
end
