defmodule PdscServer.Tasas.Petro do
  use Ecto.Schema
  import Ecto.Changeset

  schema "petro" do
    field :bolivares, :string
    field :fecha, :string

    timestamps()
  end

  @doc false
  def changeset(petro, attrs) do
    petro
    |> cast(attrs, [:fecha, :bolivares])
    |> validate_required([:fecha, :bolivares])
  end
end
