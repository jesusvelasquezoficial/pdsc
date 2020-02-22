defmodule PdscServerWeb.BitcoinControllerTest do
  use PdscServerWeb.ConnCase

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Bitcoin

  @create_attrs %{
    dolar: "some dolar",
    fecha: "some fecha"
  }
  @update_attrs %{
    dolar: "some updated dolar",
    fecha: "some updated fecha"
  }
  @invalid_attrs %{dolar: nil, fecha: nil}

  def fixture(:bitcoin) do
    {:ok, bitcoin} = Tasas.create_bitcoin(@create_attrs)
    bitcoin
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all bitcoin", %{conn: conn} do
      conn = get(conn, Routes.bitcoin_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create bitcoin" do
    test "renders bitcoin when data is valid", %{conn: conn} do
      conn = post(conn, Routes.bitcoin_path(conn, :create), bitcoin: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.bitcoin_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some dolar",
               "fecha" => "some fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.bitcoin_path(conn, :create), bitcoin: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update bitcoin" do
    setup [:create_bitcoin]

    test "renders bitcoin when data is valid", %{conn: conn, bitcoin: %Bitcoin{id: id} = bitcoin} do
      conn = put(conn, Routes.bitcoin_path(conn, :update, bitcoin), bitcoin: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.bitcoin_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some updated dolar",
               "fecha" => "some updated fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, bitcoin: bitcoin} do
      conn = put(conn, Routes.bitcoin_path(conn, :update, bitcoin), bitcoin: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete bitcoin" do
    setup [:create_bitcoin]

    test "deletes chosen bitcoin", %{conn: conn, bitcoin: bitcoin} do
      conn = delete(conn, Routes.bitcoin_path(conn, :delete, bitcoin))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.bitcoin_path(conn, :show, bitcoin))
      end
    end
  end

  defp create_bitcoin(_) do
    bitcoin = fixture(:bitcoin)
    {:ok, bitcoin: bitcoin}
  end
end
