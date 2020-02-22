defmodule PdscServerWeb.GoldControllerTest do
  use PdscServerWeb.ConnCase

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Gold

  @create_attrs %{
    dolar: "some dolar",
    fecha: "some fecha"
  }
  @update_attrs %{
    dolar: "some updated dolar",
    fecha: "some updated fecha"
  }
  @invalid_attrs %{dolar: nil, fecha: nil}

  def fixture(:gold) do
    {:ok, gold} = Tasas.create_gold(@create_attrs)
    gold
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all gold", %{conn: conn} do
      conn = get(conn, Routes.gold_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create gold" do
    test "renders gold when data is valid", %{conn: conn} do
      conn = post(conn, Routes.gold_path(conn, :create), gold: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.gold_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some dolar",
               "fecha" => "some fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.gold_path(conn, :create), gold: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update gold" do
    setup [:create_gold]

    test "renders gold when data is valid", %{conn: conn, gold: %Gold{id: id} = gold} do
      conn = put(conn, Routes.gold_path(conn, :update, gold), gold: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.gold_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some updated dolar",
               "fecha" => "some updated fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, gold: gold} do
      conn = put(conn, Routes.gold_path(conn, :update, gold), gold: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete gold" do
    setup [:create_gold]

    test "deletes chosen gold", %{conn: conn, gold: gold} do
      conn = delete(conn, Routes.gold_path(conn, :delete, gold))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.gold_path(conn, :show, gold))
      end
    end
  end

  defp create_gold(_) do
    gold = fixture(:gold)
    {:ok, gold: gold}
  end
end
