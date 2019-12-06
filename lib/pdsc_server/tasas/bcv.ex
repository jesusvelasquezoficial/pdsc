defmodule PdscServer.Tasas.Bcv do
  use Ecto.Schema
  import Ecto.Changeset

  schema "bcv" do
    field :dolar, :string
    field :euro, :string
    field :fecha, :string
    field :lira, :string
    field :rublo, :string
    field :yuan, :string

    timestamps()
  end

  @doc false
  def changeset(bcv, attrs) do
    bcv
    |> cast(attrs, [:fecha, :euro, :yuan, :lira, :rublo, :dolar])
    |> validate_required([:fecha, :euro, :yuan, :lira, :rublo, :dolar])
  end
end
