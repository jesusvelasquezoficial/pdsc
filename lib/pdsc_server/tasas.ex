defmodule PdscServer.Tasas do
  @moduledoc """
  The Tasas context.
  """

  import Ecto.Query, warn: false
  alias PdscServer.Repo

  alias PdscServer.Tasas.Bcv

  @doc """
  Returns the list of bcv.

  ## Examples

      iex> list_bcv()
      [%Bcv{}, ...]

  """
  def list_bcv do
    Repo.all(Bcv)
  end

  @doc """
  Gets a single bcv.

  Raises `Ecto.NoResultsError` if the Bcv does not exist.

  ## Examples

      iex> get_bcv!(123)
      %Bcv{}

      iex> get_bcv!(456)
      ** (Ecto.NoResultsError)

  """
  def get_bcv!(id), do: Repo.get!(Bcv, id)

  @doc """
  Creates a bcv.

  ## Examples

      iex> create_bcv(%{field: value})
      {:ok, %Bcv{}}

      iex> create_bcv(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_bcv(attrs \\ %{}) do
    %Bcv{}
    |> Bcv.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a bcv.

  ## Examples

      iex> update_bcv(bcv, %{field: new_value})
      {:ok, %Bcv{}}

      iex> update_bcv(bcv, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_bcv(%Bcv{} = bcv, attrs) do
    bcv
    |> Bcv.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Bcv.

  ## Examples

      iex> delete_bcv(bcv)
      {:ok, %Bcv{}}

      iex> delete_bcv(bcv)
      {:error, %Ecto.Changeset{}}

  """
  def delete_bcv(%Bcv{} = bcv) do
    Repo.delete(bcv)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking bcv changes.

  ## Examples

      iex> change_bcv(bcv)
      %Ecto.Changeset{source: %Bcv{}}

  """
  def change_bcv(%Bcv{} = bcv) do
    Bcv.changeset(bcv, %{})
  end
end
