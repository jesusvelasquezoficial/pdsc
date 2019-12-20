defmodule PdscServer.Tasas.Dm do
  use Ecto.Schema
  import Ecto.Changeset

  schema "dm" do
    field :dolar, :string
    field :fecha, :string

    timestamps()
  end

  @doc false
  def changeset(dm, attrs) do
    dm
    |> cast(attrs, [:fecha, :dolar])
    |> validate_required([:fecha, :dolar])
  end
end
