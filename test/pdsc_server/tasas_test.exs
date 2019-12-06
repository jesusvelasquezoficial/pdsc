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
end
