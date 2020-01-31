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
    query = from bcv in Bcv, order_by: [asc: bcv.id]
    Repo.all(query)
  end

  def list_bcv_desc_id do
    query = from bcv in Bcv, order_by: [desc: bcv.id]
    Repo.all(query)
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
  def lastTasasBcv do
    bcv = from x in Bcv, limit: 1, order_by: [desc: x.id]
    Repo.one(bcv)
  end

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

  alias PdscServer.Tasas.Dtd

  @doc """
  Returns the list of dtd.

  ## Examples

      iex> list_dtd()
      [%Dtd{}, ...]

  """
  def list_dtd do
    query = from dtd in Dtd, order_by: [asc: dtd.id]
    Repo.all(query)
  end

  def list_dtd_desc_id do
    query = from dtd in Dtd, order_by: [desc: dtd.id]
    Repo.all(query)
  end

  @doc """
  Gets a single dtd.

  Raises `Ecto.NoResultsError` if the Dtd does not exist.

  ## Examples

      iex> get_dtd!(123)
      %Dtd{}

      iex> get_dtd!(456)
      ** (Ecto.NoResultsError)

  """
  def get_dtd!(id), do: Repo.get!(Dtd, id)
  def lastTasasDtd do
    dtd = from x in Dtd, limit: 1, order_by: [desc: x.id]
    Repo.one(dtd)
  end

  @doc """
  Creates a dtd.

  ## Examples

      iex> create_dtd(%{field: value})
      {:ok, %Dtd{}}

      iex> create_dtd(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_dtd(attrs \\ %{}) do
    %Dtd{}
    |> Dtd.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a dtd.

  ## Examples

      iex> update_dtd(dtd, %{field: new_value})
      {:ok, %Dtd{}}

      iex> update_dtd(dtd, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_dtd(%Dtd{} = dtd, attrs) do
    dtd
    |> Dtd.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Dtd.

  ## Examples

      iex> delete_dtd(dtd)
      {:ok, %Dtd{}}

      iex> delete_dtd(dtd)
      {:error, %Ecto.Changeset{}}

  """
  def delete_dtd(%Dtd{} = dtd) do
    Repo.delete(dtd)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking dtd changes.

  ## Examples

      iex> change_dtd(dtd)
      %Ecto.Changeset{source: %Dtd{}}

  """
  def change_dtd(%Dtd{} = dtd) do
    Dtd.changeset(dtd, %{})
  end

  alias PdscServer.Tasas.Dm

  @doc """
  Returns the list of dm.

  ## Examples

      iex> list_dm()
      [%Dm{}, ...]

  """
  def list_dm do
    query = from dm in Dm, order_by: [asc: dm.id]
    Repo.all(query)
  end

  def list_dm_desc_id do
    query = from dm in Dm, order_by: [desc: dm.id]
    Repo.all(query)
  end

  @doc """
  Gets a single dm.

  Raises `Ecto.NoResultsError` if the Dm does not exist.

  ## Examples

      iex> get_dm!(123)
      %Dm{}

      iex> get_dm!(456)
      ** (Ecto.NoResultsError)

  """
  def get_dm!(id), do: Repo.get!(Dm, id)
  def lastTasasDm do
    dm = from x in Dm, limit: 1, order_by: [desc: x.id]
    Repo.one(dm)
  end
  @doc """
  Creates a dm.

  ## Examples

      iex> create_dm(%{field: value})
      {:ok, %Dm{}}

      iex> create_dm(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_dm(attrs \\ %{}) do
    %Dm{}
    |> Dm.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a dm.

  ## Examples

      iex> update_dm(dm, %{field: new_value})
      {:ok, %Dm{}}

      iex> update_dm(dm, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_dm(%Dm{} = dm, attrs) do
    dm
    |> Dm.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Dm.

  ## Examples

      iex> delete_dm(dm)
      {:ok, %Dm{}}

      iex> delete_dm(dm)
      {:error, %Ecto.Changeset{}}

  """
  def delete_dm(%Dm{} = dm) do
    Repo.delete(dm)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking dm changes.

  ## Examples

      iex> change_dm(dm)
      %Ecto.Changeset{source: %Dm{}}

  """
  def change_dm(%Dm{} = dm) do
    Dm.changeset(dm, %{})
  end

  alias PdscServer.Tasas.Oil

  @doc """
  Returns the list of oil.

  ## Examples

      iex> list_oil()
      [%Oil{}, ...]

  """
  def list_oil do
    Repo.all(Oil)
  end

  @doc """
  Gets a single oil.

  Raises `Ecto.NoResultsError` if the Oil does not exist.

  ## Examples

      iex> get_oil!(123)
      %Oil{}

      iex> get_oil!(456)
      ** (Ecto.NoResultsError)

  """
  def get_oil!(id), do: Repo.get!(Oil, id)

  @doc """
  Creates a oil.

  ## Examples

      iex> create_oil(%{field: value})
      {:ok, %Oil{}}

      iex> create_oil(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_oil(attrs \\ %{}) do
    %Oil{}
    |> Oil.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a oil.

  ## Examples

      iex> update_oil(oil, %{field: new_value})
      {:ok, %Oil{}}

      iex> update_oil(oil, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_oil(%Oil{} = oil, attrs) do
    oil
    |> Oil.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Oil.

  ## Examples

      iex> delete_oil(oil)
      {:ok, %Oil{}}

      iex> delete_oil(oil)
      {:error, %Ecto.Changeset{}}

  """
  def delete_oil(%Oil{} = oil) do
    Repo.delete(oil)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking oil changes.

  ## Examples

      iex> change_oil(oil)
      %Ecto.Changeset{source: %Oil{}}

  """
  def change_oil(%Oil{} = oil) do
    Oil.changeset(oil, %{})
  end
end
