defmodule PdscServerWeb.OilControllerTest do
  use PdscServerWeb.ConnCase

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Oil

  @create_attrs %{
    dolar: "some dolar",
    fecha: "some fecha"
  }
  @update_attrs %{
    dolar: "some updated dolar",
    fecha: "some updated fecha"
  }
  @invalid_attrs %{dolar: nil, fecha: nil}

  def fixture(:oil) do
    {:ok, oil} = Tasas.create_oil(@create_attrs)
    oil
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all oil", %{conn: conn} do
      conn = get(conn, Routes.oil_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create oil" do
    test "renders oil when data is valid", %{conn: conn} do
      conn = post(conn, Routes.oil_path(conn, :create), oil: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.oil_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some dolar",
               "fecha" => "some fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.oil_path(conn, :create), oil: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update oil" do
    setup [:create_oil]

    test "renders oil when data is valid", %{conn: conn, oil: %Oil{id: id} = oil} do
      conn = put(conn, Routes.oil_path(conn, :update, oil), oil: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.oil_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some updated dolar",
               "fecha" => "some updated fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, oil: oil} do
      conn = put(conn, Routes.oil_path(conn, :update, oil), oil: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete oil" do
    setup [:create_oil]

    test "deletes chosen oil", %{conn: conn, oil: oil} do
      conn = delete(conn, Routes.oil_path(conn, :delete, oil))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.oil_path(conn, :show, oil))
      end
    end
  end

  defp create_oil(_) do
    oil = fixture(:oil)
    {:ok, oil: oil}
  end
end
