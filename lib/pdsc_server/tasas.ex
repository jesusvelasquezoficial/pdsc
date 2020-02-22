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

  alias PdscServer.Tasas.Gold

  @doc """
  Returns the list of gold.

  ## Examples

      iex> list_gold()
      [%Gold{}, ...]

  """
  def list_gold do
    Repo.all(Gold)
  end

  @doc """
  Gets a single gold.

  Raises `Ecto.NoResultsError` if the Gold does not exist.

  ## Examples

      iex> get_gold!(123)
      %Gold{}

      iex> get_gold!(456)
      ** (Ecto.NoResultsError)

  """
  def get_gold!(id), do: Repo.get!(Gold, id)

  @doc """
  Creates a gold.

  ## Examples

      iex> create_gold(%{field: value})
      {:ok, %Gold{}}

      iex> create_gold(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_gold(attrs \\ %{}) do
    %Gold{}
    |> Gold.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a gold.

  ## Examples

      iex> update_gold(gold, %{field: new_value})
      {:ok, %Gold{}}

      iex> update_gold(gold, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_gold(%Gold{} = gold, attrs) do
    gold
    |> Gold.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Gold.

  ## Examples

      iex> delete_gold(gold)
      {:ok, %Gold{}}

      iex> delete_gold(gold)
      {:error, %Ecto.Changeset{}}

  """
  def delete_gold(%Gold{} = gold) do
    Repo.delete(gold)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking gold changes.

  ## Examples

      iex> change_gold(gold)
      %Ecto.Changeset{source: %Gold{}}

  """
  def change_gold(%Gold{} = gold) do
    Gold.changeset(gold, %{})
  end

  alias PdscServer.Tasas.Bitcoin

  @doc """
  Returns the list of bitcoin.

  ## Examples

      iex> list_bitcoin()
      [%Bitcoin{}, ...]

  """
  def list_bitcoin do
    Repo.all(Bitcoin)
  end

  @doc """
  Gets a single bitcoin.

  Raises `Ecto.NoResultsError` if the Bitcoin does not exist.

  ## Examples

      iex> get_bitcoin!(123)
      %Bitcoin{}

      iex> get_bitcoin!(456)
      ** (Ecto.NoResultsError)

  """
  def get_bitcoin!(id), do: Repo.get!(Bitcoin, id)

  @doc """
  Creates a bitcoin.

  ## Examples

      iex> create_bitcoin(%{field: value})
      {:ok, %Bitcoin{}}

      iex> create_bitcoin(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_bitcoin(attrs \\ %{}) do
    %Bitcoin{}
    |> Bitcoin.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a bitcoin.

  ## Examples

      iex> update_bitcoin(bitcoin, %{field: new_value})
      {:ok, %Bitcoin{}}

      iex> update_bitcoin(bitcoin, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_bitcoin(%Bitcoin{} = bitcoin, attrs) do
    bitcoin
    |> Bitcoin.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Bitcoin.

  ## Examples

      iex> delete_bitcoin(bitcoin)
      {:ok, %Bitcoin{}}

      iex> delete_bitcoin(bitcoin)
      {:error, %Ecto.Changeset{}}

  """
  def delete_bitcoin(%Bitcoin{} = bitcoin) do
    Repo.delete(bitcoin)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking bitcoin changes.

  ## Examples

      iex> change_bitcoin(bitcoin)
      %Ecto.Changeset{source: %Bitcoin{}}

  """
  def change_bitcoin(%Bitcoin{} = bitcoin) do
    Bitcoin.changeset(bitcoin, %{})
  end

  alias PdscServer.Tasas.Petro

  @doc """
  Returns the list of petro.

  ## Examples

      iex> list_petro()
      [%Petro{}, ...]

  """
  def list_petro do
    Repo.all(Petro)
  end

  @doc """
  Gets a single petro.

  Raises `Ecto.NoResultsError` if the Petro does not exist.

  ## Examples

      iex> get_petro!(123)
      %Petro{}

      iex> get_petro!(456)
      ** (Ecto.NoResultsError)

  """
  def get_petro!(id), do: Repo.get!(Petro, id)

  @doc """
  Creates a petro.

  ## Examples

      iex> create_petro(%{field: value})
      {:ok, %Petro{}}

      iex> create_petro(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_petro(attrs \\ %{}) do
    %Petro{}
    |> Petro.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a petro.

  ## Examples

      iex> update_petro(petro, %{field: new_value})
      {:ok, %Petro{}}

      iex> update_petro(petro, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_petro(%Petro{} = petro, attrs) do
    petro
    |> Petro.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Petro.

  ## Examples

      iex> delete_petro(petro)
      {:ok, %Petro{}}

      iex> delete_petro(petro)
      {:error, %Ecto.Changeset{}}

  """
  def delete_petro(%Petro{} = petro) do
    Repo.delete(petro)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking petro changes.

  ## Examples

      iex> change_petro(petro)
      %Ecto.Changeset{source: %Petro{}}

  """
  def change_petro(%Petro{} = petro) do
    Petro.changeset(petro, %{})
  end
end
