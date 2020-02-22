defmodule PdscServer.Tasas.Bitcoin do
  use Ecto.Schema
  import Ecto.Changeset

  schema "bitcoin" do
    field :dolar, :string
    field :fecha, :string

    timestamps()
  end

  @doc false
  def changeset(bitcoin, attrs) do
    bitcoin
    |> cast(attrs, [:fecha, :dolar])
    |> validate_required([:fecha, :dolar])
  end
end
