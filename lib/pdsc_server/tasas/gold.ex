defmodule PdscServer.Tasas.Gold do
  use Ecto.Schema
  import Ecto.Changeset

  schema "gold" do
    field :dolar, :string
    field :fecha, :string

    timestamps()
  end

  @doc false
  def changeset(gold, attrs) do
    gold
    |> cast(attrs, [:fecha, :dolar])
    |> validate_required([:fecha, :dolar])
  end
end
