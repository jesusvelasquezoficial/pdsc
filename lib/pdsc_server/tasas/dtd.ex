defmodule PdscServer.Tasas.Dtd do
  use Ecto.Schema
  import Ecto.Changeset

  schema "dtd" do
    field :dolar, :string
    field :euro, :string
    field :fecha, :string

    timestamps()
  end

  @doc false
  def changeset(dtd, attrs) do
    dtd
    |> cast(attrs, [:fecha, :euro, :dolar])
    |> validate_required([:fecha, :euro, :dolar])
  end
end
