defmodule PdscServer.TasasTest do
  use PdscServer.DataCase

  alias PdscServer.Tasas

  describe "bcv" do
    alias PdscServer.Tasas.Bcv

    @valid_attrs %{dolar: "some dolar", euro: "some euro", fecha: "some fecha", lira: "some lira", rublo: "some rublo", yuan: "some yuan"}
    @update_attrs %{dolar: "some updated dolar", euro: "some updated euro", fecha: "some updated fecha", lira: "some updated lira", rublo: "some updated rublo", yuan: "some updated yuan"}
    @invalid_attrs %{dolar: nil, euro: nil, fecha: nil, lira: nil, rublo: nil, yuan: nil}

    def bcv_fixture(attrs \\ %{}) do
      {:ok, bcv} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Tasas.create_bcv()

      bcv
    end

    test "list_bcv/0 returns all bcv" do
      bcv = bcv_fixture()
      assert Tasas.list_bcv() == [bcv]
    end

    test "get_bcv!/1 returns the bcv with given id" do
      bcv = bcv_fixture()
      assert Tasas.get_bcv!(bcv.id) == bcv
    end

    test "create_bcv/1 with valid data creates a bcv" do
      assert {:ok, %Bcv{} = bcv} = Tasas.create_bcv(@valid_attrs)
      assert bcv.dolar == "some dolar"
      assert bcv.euro == "some euro"
      assert bcv.fecha == "some fecha"
      assert bcv.lira == "some lira"
      assert bcv.rublo == "some rublo"
      assert bcv.yuan == "some yuan"
    end

    test "create_bcv/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Tasas.create_bcv(@invalid_attrs)
    end

    test "update_bcv/2 with valid data updates the bcv" do
      bcv = bcv_fixture()
      assert {:ok, %Bcv{} = bcv} = Tasas.update_bcv(bcv, @update_attrs)
      assert bcv.dolar == "some updated dolar"
      assert bcv.euro == "some updated euro"
      assert bcv.fecha == "some updated fecha"
      assert bcv.lira == "some updated lira"
      assert bcv.rublo == "some updated rublo"
      assert bcv.yuan == "some updated yuan"
    end

    test "update_bcv/2 with invalid data returns error changeset" do
      bcv = bcv_fixture()
      assert {:error, %Ecto.Changeset{}} = Tasas.update_bcv(bcv, @invalid_attrs)
      assert bcv == Tasas.get_bcv!(bcv.id)
    end

    test "delete_bcv/1 deletes the bcv" do
      bcv = bcv_fixture()
      assert {:ok, %Bcv{}} = Tasas.delete_bcv(bcv)
      assert_raise Ecto.NoResultsError, fn -> Tasas.get_bcv!(bcv.id) end
    end

    test "change_bcv/1 returns a bcv changeset" do
      bcv = bcv_fixture()
      assert %Ecto.Changeset{} = Tasas.change_bcv(bcv)
    end
  end

  describe "dtd" do
    alias PdscServer.Tasas.Dtd

    @valid_attrs %{dolar: "some dolar", euro: "some euro", fecha: "some fecha"}
    @update_attrs %{dolar: "some updated dolar", euro: "some updated euro", fecha: "some updated fecha"}
    @invalid_attrs %{dolar: nil, euro: nil, fecha: nil}

    def dtd_fixture(attrs \\ %{}) do
      {:ok, dtd} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Tasas.create_dtd()

      dtd
    end

    test "list_dtd/0 returns all dtd" do
      dtd = dtd_fixture()
      assert Tasas.list_dtd() == [dtd]
    end

    test "get_dtd!/1 returns the dtd with given id" do
      dtd = dtd_fixture()
      assert Tasas.get_dtd!(dtd.id) == dtd
    end

    test "create_dtd/1 with valid data creates a dtd" do
      assert {:ok, %Dtd{} = dtd} = Tasas.create_dtd(@valid_attrs)
      assert dtd.dolar == "some dolar"
      assert dtd.euro == "some euro"
      assert dtd.fecha == "some fecha"
    end

    test "create_dtd/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Tasas.create_dtd(@invalid_attrs)
    end

    test "update_dtd/2 with valid data updates the dtd" do
      dtd = dtd_fixture()
      assert {:ok, %Dtd{} = dtd} = Tasas.update_dtd(dtd, @update_attrs)
      assert dtd.dolar == "some updated dolar"
      assert dtd.euro == "some updated euro"
      assert dtd.fecha == "some updated fecha"
    end

    test "update_dtd/2 with invalid data returns error changeset" do
      dtd = dtd_fixture()
      assert {:error, %Ecto.Changeset{}} = Tasas.update_dtd(dtd, @invalid_attrs)
      assert dtd == Tasas.get_dtd!(dtd.id)
    end

    test "delete_dtd/1 deletes the dtd" do
      dtd = dtd_fixture()
      assert {:ok, %Dtd{}} = Tasas.delete_dtd(dtd)
      assert_raise Ecto.NoResultsError, fn -> Tasas.get_dtd!(dtd.id) end
    end

    test "change_dtd/1 returns a dtd changeset" do
      dtd = dtd_fixture()
      assert %Ecto.Changeset{} = Tasas.change_dtd(dtd)
    end
  end

  describe "dm" do
    alias PdscServer.Tasas.Dm

    @valid_attrs %{dolar: "some dolar", fecha: "some fecha"}
    @update_attrs %{dolar: "some updated dolar", fecha: "some updated fecha"}
    @invalid_attrs %{dolar: nil, fecha: nil}

    def dm_fixture(attrs \\ %{}) do
      {:ok, dm} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Tasas.create_dm()

      dm
    end

    test "list_dm/0 returns all dm" do
      dm = dm_fixture()
      assert Tasas.list_dm() == [dm]
    end

    test "get_dm!/1 returns the dm with given id" do
      dm = dm_fixture()
      assert Tasas.get_dm!(dm.id) == dm
    end

    test "create_dm/1 with valid data creates a dm" do
      assert {:ok, %Dm{} = dm} = Tasas.create_dm(@valid_attrs)
      assert dm.dolar == "some dolar"
      assert dm.fecha == "some fecha"
    end

    test "create_dm/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Tasas.create_dm(@invalid_attrs)
    end

    test "update_dm/2 with valid data updates the dm" do
      dm = dm_fixture()
      assert {:ok, %Dm{} = dm} = Tasas.update_dm(dm, @update_attrs)
      assert dm.dolar == "some updated dolar"
      assert dm.fecha == "some updated fecha"
    end

    test "update_dm/2 with invalid data returns error changeset" do
      dm = dm_fixture()
      assert {:error, %Ecto.Changeset{}} = Tasas.update_dm(dm, @invalid_attrs)
      assert dm == Tasas.get_dm!(dm.id)
    end

    test "delete_dm/1 deletes the dm" do
      dm = dm_fixture()
      assert {:ok, %Dm{}} = Tasas.delete_dm(dm)
      assert_raise Ecto.NoResultsError, fn -> Tasas.get_dm!(dm.id) end
    end

    test "change_dm/1 returns a dm changeset" do
      dm = dm_fixture()
      assert %Ecto.Changeset{} = Tasas.change_dm(dm)
    end
  end

  describe "oil" do
    alias PdscServer.Tasas.Oil

    @valid_attrs %{dolar: "some dolar", fecha: "some fecha"}
    @update_attrs %{dolar: "some updated dolar", fecha: "some updated fecha"}
    @invalid_attrs %{dolar: nil, fecha: nil}

    def oil_fixture(attrs \\ %{}) do
      {:ok, oil} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Tasas.create_oil()

      oil
    end

    test "list_oil/0 returns all oil" do
      oil = oil_fixture()
      assert Tasas.list_oil() == [oil]
    end

    test "get_oil!/1 returns the oil with given id" do
      oil = oil_fixture()
      assert Tasas.get_oil!(oil.id) == oil
    end

    test "create_oil/1 with valid data creates a oil" do
      assert {:ok, %Oil{} = oil} = Tasas.create_oil(@valid_attrs)
      assert oil.dolar == "some dolar"
      assert oil.fecha == "some fecha"
    end

    test "create_oil/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Tasas.create_oil(@invalid_attrs)
    end

    test "update_oil/2 with valid data updates the oil" do
      oil = oil_fixture()
      assert {:ok, %Oil{} = oil} = Tasas.update_oil(oil, @update_attrs)
      assert oil.dolar == "some updated dolar"
      assert oil.fecha == "some updated fecha"
    end

    test "update_oil/2 with invalid data returns error changeset" do
      oil = oil_fixture()
      assert {:error, %Ecto.Changeset{}} = Tasas.update_oil(oil, @invalid_attrs)
      assert oil == Tasas.get_oil!(oil.id)
    end

    test "delete_oil/1 deletes the oil" do
      oil = oil_fixture()
      assert {:ok, %Oil{}} = Tasas.delete_oil(oil)
      assert_raise Ecto.NoResultsError, fn -> Tasas.get_oil!(oil.id) end
    end

    test "change_oil/1 returns a oil changeset" do
      oil = oil_fixture()
      assert %Ecto.Changeset{} = Tasas.change_oil(oil)
    end
  end
end
