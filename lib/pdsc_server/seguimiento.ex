defmodule PdscServer.Seguimiento do
  @moduledoc """
  The Seguimiento context.
  """

  import Ecto.Query, warn: false
  alias PdscServer.Repo

  alias PdscServer.Seguimiento.PrecioProducto

  @doc """
  Returns the list of precioproducto.

  ## Examples

      iex> list_precioproducto()
      [%PrecioProducto{}, ...]

  """
  def list_precioproducto do
    Repo.all(PrecioProducto)
  end

  @doc """
  Gets a single precio_producto.

  Raises `Ecto.NoResultsError` if the Precio producto does not exist.

  ## Examples

      iex> get_precio_producto!(123)
      %PrecioProducto{}

      iex> get_precio_producto!(456)
      ** (Ecto.NoResultsError)

  """
  def get_precio_producto!(id), do: Repo.get!(PrecioProducto, id)
  def get_all_precio_producto!(idproducto) do
    query = from p in PrecioProducto,
      where: p.idproducto == ^idproducto
    Repo.all(query)
    # Repo.get_by!(PrecioProducto, idproducto: idproducto)
  end

  @doc """
  Creates a precio_producto.

  ## Examples

      iex> create_precio_producto(%{field: value})
      {:ok, %PrecioProducto{}}

      iex> create_precio_producto(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_precio_producto(attrs \\ %{}) do
    %PrecioProducto{}
    |> PrecioProducto.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a precio_producto.

  ## Examples

      iex> update_precio_producto(precio_producto, %{field: new_value})
      {:ok, %PrecioProducto{}}

      iex> update_precio_producto(precio_producto, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_precio_producto(%PrecioProducto{} = precio_producto, attrs) do
    precio_producto
    |> PrecioProducto.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a PrecioProducto.

  ## Examples

      iex> delete_precio_producto(precio_producto)
      {:ok, %PrecioProducto{}}

      iex> delete_precio_producto(precio_producto)
      {:error, %Ecto.Changeset{}}

  """
  def delete_precio_producto(%PrecioProducto{} = precio_producto) do
    Repo.delete(precio_producto)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking precio_producto changes.

  ## Examples

      iex> change_precio_producto(precio_producto)
      %Ecto.Changeset{source: %PrecioProducto{}}

  """
  def change_precio_producto(%PrecioProducto{} = precio_producto) do
    PrecioProducto.changeset(precio_producto, %{})
  end
end
