defmodule PdscServer.Tasas.Oil do
  use Ecto.Schema
  import Ecto.Changeset

  schema "oil" do
    field :dolar, :string
    field :fecha, :string

    timestamps()
  end

  @doc false
  def changeset(oil, attrs) do
    oil
    |> cast(attrs, [:fecha, :dolar])
    |> validate_required([:fecha, :dolar])
  end
end
